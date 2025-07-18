---
slug: /how-rails-routes-work
title: From Path to Action - The Magic of Rails Routing
authors: pradnyesh
tags: [rails, routing, action-dispatch, controller]
---

# Introduction

While working on one of my project, I noticed that visiting `/users/profile/edit` was incorrectly hitting the `users#show` action instead of my custom `users#edit_profile`. The problem? I had defined get `'/users/:id'` before the more specific route. Since Rails matches routes top-down, it treated `"profile"` as the `:id`. Rails doesn't validate the full path unless the pattern demands it.

This small routing mistake led me to explore how Rails internally matches and resolves routes.

Well, it's not magic — it's **Action Dispatch** behind the scenes doing the heavy lifting!

In this blog, let’s break down how Rails handles routing, from the moment a request hits your server, to the moment your controller action is executed.

<!--truncate-->

# 1. What happens when you hit a URL?

Let’s say you open your browser and type:

`https://example.com/users/5`


This sends an **HTTP GET request** to your Rails server. From there, several things happen:

1. **Rack** receives the request.
2. **Action Dispatch** takes over and figures out which controller and action to run.
3. The matched controller’s action is executed, and a response is sent back.

But let’s go step by step.

# 2. Rails is built on Rack

Rails is a **Rack-based** framework.

Rack is a simple Ruby interface between web servers and Ruby web applications. Every Rails app starts with a **`config.ru`** file, which tells Rack how to boot your app:

```ruby
require_relative 'config/environment'
run Rails.application
```

So when a request comes in, Rack calls Rails.application.call(env) and hands over the request.

# 3. Enter Action Dispatch: Routing the Request
Now, Rails.application is an instance of the class Rails::Application, and it includes a middleware stack — one of which is **ActionDispatch::Routing::RouteSet**.

This is where routing magic begins.

Your config/routes.rb file defines all available routes.

**ActionDispatch::Routing::RouteSet** uses this definition to match the incoming path (/users/5) and HTTP method (GET).

Once a match is found, it maps it to something like:

```ruby
{ controller: "users", action: "show", id: "5" }
```

This is called route recognition.

# 4. Dispatching to the Right Controller
After the route is recognized, Rails needs to dispatch the request to the correct controller and action.

This is handled by **ActionDispatch::Routing::RouteSet::Dispatcher**.

Here’s what happens:
 - It takes the controller name (e.g., `"users"`).
 - It turns that into a constant (`UsersController`).
 - It creates an instance of that controller.
 - It calls the `show` action on it with the provided `id` param.

So, this line in `routes.rb`:

```ruby
get '/users/:id', to: 'users#show'
```
Turns into:
```ruby
UsersController.new.show(params)
```
(Of course, in reality, there’s more middleware, filters, and view rendering, but conceptually this is what happens.)

# 5. Params and URL Helpers
During routing, Rails also extracts route parameters (like :id) and puts them into the params hash, which your controller can access easily.

And thanks to route definitions, Rails can **generate** URLs using route helpers:
```ruby
user_path(5)  # => "/users/5"
```
This works because of Named Routes.

# 6. Middleware Stack: The Unsung Heroes
Before your controller is even hit, the request passes through a stack of middleware defined in:
```ruby
Rails.application.middleware
```
These include things like:
 - Logging
 - Caching
 - Session handling
 - Cookies
 - Parameter parsing

Once all these layers are done, the request finally reaches your controller.

# Summary: Rails Routing in a Nutshell
When you hit `/users/5`, this happens behind the scenes:

1. **Rack** receives the request.
2. Rails passes it to **Action Dispatch**.
3. `routes.rb` matches the URL to a controller and action.
4. Rails creates a controller instance.
5. The action (`show`) is executed.
6. Response is generated and returned.

# Bonus Tip: View All Routes in Your App
You can run this command to see all routes in your Rails app:

```ruby
$ rails routes
```
Or use grep to search:

```ruby
$ rails routes | grep users
```
# Conclusion
I hope this helped you understand the beautiful flow of how Rails handles routing using Action Dispatch. If you’re curious, try exploring the source code inside the actionpack gem — it’s super well organized!

Let’s connect on [LinkedIn](https://www.linkedin.com/in/pradnyeshpatil27/) if you have any questions or want to chat more about Ruby on Rails.

