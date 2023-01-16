<!DOCTYPE html>
<html lang="en">

<head>
  <?php include '_top.php'; ?>
  <title>Project-1 :: Home</title>
</head>

<body class="home-page">

  <!-- LOADER -->
  <div id="loader-wrapper"></div>

  <div id="content-block">

    <!-- HEADER -->
    <header>
      <?php include '_header.php'; ?>
    </header>

    <!-- BANNER -->
    <div class="section banner home-banner">
      <div class="banner-align full-h type_right">
        <div class="bg rellax" data-rellax-speed="-1.5" style="background-image: url(img/home-banner.jpg);"></div>
        <div class="bg mobile" style="background-image: url(img/home-banner-mobile.jpg);"></div>
        <div class="opacity"></div>
        <div class="container">
          <div class="inner">
            <div class="banner-content custom_offset type2">
              <div class="h1 fw-200 color_mint text-line-2">
                <span class="color_white first-word">Lorem</span> <br> ipsum dolor
              </div>
              <div class="btns_wr custom_offset">
                <a href="#" class="btn">Browse Products</a>
                <a href="#" class="btn">Find a product</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#inverted_section" class="reverse_text">
        Scroll </a>
    </div>

    <!-- SECTION INVERTED TEXT -->
    <div id="inverted_section" class="section inverted_section item-animation">
      <div class="decor_right animate-item bg" style="background-image: url('img/decor_right.webp')"></div>
      <div class="container">
        <div class="row row-260">
          <div class="col-xl-2 col-lg-3 animate-item to-up">
            <div class="inverted_text">Lorem</div>
          </div>
          <div class="col-xl-9 col-lg-8 align-self-center">
            <div class="content custom_offset animate-item to-up">
              <div class="sub_title">
                Lorem ipsum dolor sit amet.
              </div>
              <div class="description h5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur earum ipsam libero maiores beatae dicta necessitatibus! Eaque, autem iste?
              </div>
            </div>
            <div class="img_wrapp animate-item img-to-down">
              <picture>
                <source srcset="img/home-img-1.webp" type="image/webp">
                <source srcset="img/home-img-1.jpg" type="image/jpeg">
                <img src="img/home-img-1.jpg" alt="img" loading="lazy">
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer-sm"></div>
    </div>

    <!-- SCROLLING SECTION -->
    <div class="section scroll_section item-animation">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="title text-center animate-item to-up">
              <h3 class="fw-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            </div>
          </div>
        </div>
        <div id="parallax">
          <div class="content">
            <picture>
              <source srcset="img/home-img-2.webp" type="image/webp">
              <source srcset="img/home-img-2.jpg" type="image/jpeg">
              <img src="img/home-img-2.jpg" alt="img" loading="lazy">
            </picture>
            <div class="title h2">
              <div>nature</div>
              <div>flowers</div>
              <div>and animals</div>
              <div>together!</div>
            </div>
          </div>
        </div>
        <div class="h_faq">
          <h3 class="h3 title animate-item">
            Lorem ipsum dolor sit.
          </h3>
          <div class="row">
            <div class="col-xl-9 offset-xl-1">
              <div class="faq_desc text text-xl animate-item to-up">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quisquam atque delectus minus architecto quo quas suscipit mollitia perspiciatis ut.
                </p>
              </div>
              <div class="accordion animate-item">
                <div class="accordion-item">
                  <div class="accordion-title h4">Lorem ipsum dolor sit amet.</div>
                  <div class="accordion-inner">
                    <div class="text text-xl">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde totam deserunt doloribus animi mollitia et eveniet alias inventore facilis cum?
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div class="accordion-title h4">Lorem ipsum dolor sit amet.</div>
                  <div class="accordion-inner">
                    <div class="text text-xl">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum quidem illo molestiae delectus ea recusandae quas fuga omnis sunt?
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div class="accordion-title h4">Lorem ipsum dolor sit amet.</div>
                  <div class="accordion-inner">
                    <div class="text text-xl">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quaerat, quod harum inventore cum error hic repudiandae facilis et ullam!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div class="accordion-title h4">Lorem ipsum dolor sit amet.</div>
                  <div class="accordion-inner">
                    <div class="text text-xl">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure id expedita porro quia exercitationem quo obcaecati earum quibusdam consequatur quos.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <div class="accordion-title h4">Lorem ipsum dolor sit amet.</div>
                  <div class="accordion-inner">
                    <div class="text text-xl">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima doloribus veritatis sint nulla nemo iste voluptatibus ab perferendis repudiandae amet?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="about.php" class="btn type2">Learn more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer-ss"></div>
    </div>

    <!-- SECTION RIGHT CONTENT -->
    <div class="section section_rtl item-animation">
      <div class="big_title fonts_arimo fw-700 animate-item to-up">
        Products
      </div>
      <div class="img_wrapp animate-item img-to-down">
        <picture>
          <source srcset="img/home-img-3.webp" type="image/webp">
          <source srcset="img/home-img-3.jpg" type="image/jpeg">
          <img src="img/home-img-3.jpg" alt="img" loading="lazy">
        </picture>
      </div>
      <div class="bottom_content">
        <div class="decor_left bg animate-item" style="background-image: url('img/decor-left.webp')"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-5">
              <div class="content custom_offset animate-item to-up">
                <div class="text text-xl">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deserunt laborum ex ut officiis facilis, iure esse quas.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum cupiditate exercitationem!
                  </p>
                </div>
                <div class="btns_wr custom_offset animate-item">
                  <a class="btn type2" href="#">browser products</a>
                  <a class="btn type2" href="#">find a products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer-xxl"></div>
    </div>

    <div class="section">
      <div class="full_bg item-animation">
        <div class="swiper-entry full_bg_swiper animate-item img-to-down">
          <div class="swiper-container" data-options='{"slidesPerView":1, "autoHeight":true, "loop": true, "effect": "fade", "fadeEffect":{"crossFade": true}}'>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <figure>
                  <div class="img_wrapp animate-item img-to-down">
                    <picture>
                      <source srcset="img/home-img-1.webp" type="image/webp">
                      <source srcset="img/home-img-1.jpg" type="image/jpeg">
                      <img src="img/home-img-1.jpg" alt="img" loading="lazy">
                    </picture>
                  </div>
                  <figcaption>
                    <div class="container">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <div class="img_wrapp animate-item img-to-down">
                    <picture>
                      <source srcset="img/home-img-2.webp" type="image/webp">
                      <source srcset="img/home-img-2.jpg" type="image/jpeg">
                      <img src="img/home-img-2.jpg" alt="img" loading="lazy">
                    </picture>
                  </div>
                  <figcaption>
                    <div class="container">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div class="swiper-slide">
                <figure>
                  <div class="img_wrapp animate-item img-to-down">
                    <picture>
                      <source srcset="img/home-img-3.webp" type="image/webp">
                      <source srcset="img/home-img-3.jpg" type="image/jpeg">
                      <img src="img/home-img-3.jpg" alt="img" loading="lazy">
                    </picture>
                  </div>
                  <figcaption>
                    <div class="container">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-relative"></div>
        </div>
      </div>
      <div class="spacer-md"></div>
    </div>

    <!-- CONTENT SECTION -->
    <div class="section item-animation">
      <div class="container">
        <div class="row content_block">
          <div class="col-md-5">
            <div class="content_img">
              <div class="img_wrapp animate-item img-to-down">
                <picture>
                  <source srcset="img/home-l-img.webp" type="image/webp">
                  <source srcset="img/home-l-img.jpg" type="image/jpeg">
                  <img src="img/home-l-img.jpg" alt="img" loading="lazy">
                </picture>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="custom_content custom_offset animate-item to-up">
              <h3 class="content_title text-line-3">Lorem ipsum dolor sit amet.</h3>
              <div class="text text-xl text-line-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus quis nobis doloremque. Suscipit nemo rem laudantium libero veniam quam.
                </p>
              </div>
              <a href="#" class="btn type2">learn about lorem</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-11 offset-lg-1 no-padd">
            <div class="image_block animate-item img-to-down">
              <div class="img_wrapp">
                <picture>
                  <source srcset="img/home-img-4.webp" type="image/webp">
                  <source srcset="img/home-img-4.jpg" type="image/jpeg">
                  <img src="img/home-img-4.jpg" alt="img" loading="lazy">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer-xs"></div>
    </div>

    <!-- FOOTER -->
    <footer>
      <?php include '_footer.php'; ?>
    </footer>

  </div>

  <?php include '_swiper.php'; ?>

  <?php include '_bottom.php'; ?>


</body>

</html>