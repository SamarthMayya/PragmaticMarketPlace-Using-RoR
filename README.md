# Pragmatic Market Place - A simple e - market place

This is a simple application that demonstrates the use of Ruby on Rails as a framework in developing this website. I have used, along with the normal server side stuff, a little bit of AJAX as well, so that the application simulates fast loading of parts of the webpage, and thereby simulates a real life market place cart too.

## Deployment
To get this application running, here are a few steps(specific to linux):
* First of all, clone the repository, and change directory to the project directory.
* Next, run the following two commands to make sure that all the dependencies are installed:
```
   bundle install
   yarn install
```
* Then start the rails server using the command 
  ```
  rails server
  ``` 
  or the shorthand 
  ```
  rails s
  ```.
* Open a browser of your choice and go to the url https://localhost:3000/ , and voila, you are on the index page, showing all the products that you can buy.
> Congratulations! You know how to open the application. Feel free to explore the code, and learn more about [Ruby on Rails](https://guides.rubyonrails.org/).
