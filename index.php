<!DOCTYPE html>

<html lang="en">

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Title Page -->
    <title>Travel Vlog</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="libraries/bootstrap-4.0.0-beta/dist/css/bootstrap.min.css">

    <!-- Your modified styles goes here.. -->
    <link rel="stylesheet" type="text/css" href="View/css/layout.css">

    <link rel="stylesheet" href="./fonts/fontawesome.min.css">
    <link rel="stylesheet" href="./styles.css">
    <link rel="stylesheet" href="./app.css">

  </head>

  <body>
    <!-- code here -->
    <div class="container">
    
     
      <!-- <nav class="row navbar navbar-expand-lg navbar-dark bg-dark"> -->
      <nav class="row navbar navbar-expand-lg navbar-dark py-0">
       <!-- <a class="navbar-brand" href="#">Admin</a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item" id="home_tab">
              <a class="nav-link" id="home_nav"><i class="fa fa-home" aria-hidden="true"></i> Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item" id="about_tab">
              <a class="nav-link class="text-dark" id="about_nav">About</a>
            </li>
            <li class="nav-item" id="contact_tab">
              <a class="nav-link" class="text-dark" id="contact_nav">Contact Us</a>
            </li>
             <li class="nav-item" id="destination_tab">
              <a class="nav-link" class="text-dark" id="destination_nav">Destinations</a>
            </li>
          </ul>
          <!-- <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
        </div>
        </nav>

      <div id="navigator"></div>
      <main class="content"></main>
    </div>

    <div class="container-fluid">
      <section class="full-container gallery-container mb-5">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card box mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="column-2">
                    <img src="./View/images/calendar.png" alt="calendar" width="40px" height="40px">
                  </div>
                  <div class="column-10">
                    <h5 class="card-title text-white ml-2 mb-3">#Plan Your Vacation</h5>
                  </div>
                </div>
                <p class="card-text text-secondary">"Plan your dream vacation. Start a savings account today to make it happen. Each small contribution to your savings account brings you one step closer to achieving your goal."</p>
                <!-- <a href="#" class="btn btn-dark btn-block btn-sm">
                  <i class="fas fa-check-circle"></i>&nbsp;
                  Read More
                </a> -->
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card box mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="column-2">
                    <img src="./View/images/chat.png" alt="calendar" width="40px" height="40px">
                  </div>
                  <div class="column-10">
                    <h5 class="card-title text-white ml-2 mb-3">#Be Updated</h5>
                  </div>
                </div>
                <p class="card-text text-secondary">"The world is a book, and those who do not travel read only a page."</p>
                <!-- <a href="#" class="btn btn-dark btn-block btn-sm">
                  <i class="fas fa-check-circle"></i>&nbsp;
                  Read More
                </a> -->
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card box mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="column-2">
                    <img src="./View/images/clipboard.png" alt="calendar" width="40px" height="40px">
                  </div>
                  <div class="column-10">
                    <h5 class="card-title text-white ml-2 mb-3">#Make plans</h5>
                  </div>
                </div>
                <p class="card-text text-secondary">"Set your goals. Make your plans. Chase your dreams."</p>
                <!-- <a href="#" class="btn btn-dark btn-block btn-sm">
                  <i class="fas fa-check-circle"></i>&nbsp;
                  Read More
                </a> -->
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card box mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="column-2">
                    <img src="./View/images/worldwide.png" alt="calendar" width="40px" height="40px">
                  </div>
                  <div class="column-10">
                    <h5 class="card-title text-white ml-2 mb-3">#Travel Around the World</h5>
                  </div>
                </div>
                <p class="card-text text-secondary">"Live with no excuses and travel with no regrets. The shortest way to yourself is around the world."</p>
                <!-- <a href="#" class="btn btn-dark btn-block btn-sm">
                  <i class="fas fa-check-circle"></i>&nbsp;
                  Read More
                </a> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- JQUERY -->
    <script src="libraries/jquery-3.2.1.js"></script>
  
    <!-- Popper JS -->
    <script src="libraries/popper.js-1.12.3/dist/umd/popper.min.js"></script>
    
    <!-- Bootstrap JS -->
    <script src="libraries/bootstrap-4.0.0-beta/dist/js/bootstrap.min.js"></script>

    <!-- Sweetalert -->
    <script src="libraries/sweetalert/dist/sweetalert.min.js"></script>
  
    <!-- Modified JS -->
    <!-- <script src="Controller/room_controller.js"></script> -->
    <script src="./Controller/navigator.js"></script>
    <!-- <script src="Controller/functions.js"></script> -->
  </body>

</html>