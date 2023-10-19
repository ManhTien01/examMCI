const blog = document.querySelector('.article__item') 
const content = document.querySelector('.content')

const handleClickBlog = () => {
    content.innerHTML = `<div class="event">
    <div class="container mt-4 pt-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-12 col-xl-7 col-order-1 article">
          <div class="article__search-wrap">
            <input class="article__search-input" type="text" placeholder="Tìm kiếm bài viết">
            <button type="submit"><img src="assets/images/icon _search.png" alt=""></button>
          </div>
          <ul class="mt-4 tap">
            <li class="tap-title">Chia sẻ kinh nghiệm</li>
            <li class="tap-title">Kiến thức chuyên môn</li>
            <li class="tap-title">MCI Careers</li>
            <li class="tap-title">Kinh nghiệm thực chiến</li>
            <li class="tap-title">Lịch khai giảng</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-3 col-0 hyperlink">
      <div class="container hyperlink__content">
        <span class="">Trang chủ</span>
        <i class="fa-solid fa-chevron-right"></i>
        <span class="">Blog</span>
        <i class="fa-solid fa-chevron-right"></i>
        <span class="">Chia sẻ kinh nghiệm</span>
        <i class="fa-solid fa-chevron-right"></i>
        <span class="">Bạn Nguyễn Quang Hưng - Học DATA là một quá trình và mình vượt qua nó như thế
          nào</span>

      </div>
    </div>

    <div class="container mt-4">
      <div class="row gx-5">
        <div class="py-4 col-12 col-xl-7 col-order-1 blog__right">
          <div class="d-flex flex-column">
            <div class="col-order-2">

              <div class="title event-header ">Bạn Nguyễn Quang Hưng - Học DATA là một quá trình và mình vượt qua nó như
                thế
                nào
                <div class="line col-0"></div>
              </div>
              <div class="mt-5 description">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
                ngành
                công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                ngành
                công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất
                thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học
                vào
                các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                được
                vào ngành công nghệ thông tin như mong muốn mà chỉ...
              </div>
              <div class="mt-4 table-content">
                  <div class="title">
                    <i class="fa-solid fa-bars"></i>
                    Nội dung bài viết
                  </div>
                  <ul class="table-content__list">
                    <li class="table-content__list-item">Nội dung bài viết</li>
                    <li class="table-content__list-item">Nội dung bài viết</li>
                    <li class="table-content__list-item">Nội dung bài viết</li>
                    <li class="table-content__list-item">Nội dung bài viết</li>
                    <li class="table-content__list-item">Nội dung bài viết</li>
                  </ul>
              </div>

              <div class="mt-5 description">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
                ngành
                công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                ngành
                công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất
                thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học
                vào
                các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                được
                vào ngành công nghệ thông tin như mong muốn mà chỉ...
              </div>

              <div class="mt-3 description">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
                ngành
                công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                ngành
                công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất
                thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học
                vào
                các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                được
                vào ngành công nghệ thông tin như mong muốn mà chỉ...
              </div>

              <div class="mt-3 description">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
                ngành
                công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                ngành
                công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất
                thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học
                vào
                các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                được
                vào ngành công nghệ thông tin như mong muốn mà chỉ...
              </div>
            </div>

            <div class="mt-4 blog__img col-order-1"></div>

            <div class="col-order-3">

              <div class="mt-5 description">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
                ngành
                công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                ngành
                công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất
                thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học
                vào
                các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                được
                vào ngành công nghệ thông tin như mong muốn mà chỉ...
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các
                ngôn
                ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong
                muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic
                Toán
                học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ
                thông
                tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                thông
                tin như mong muốn mà chỉ...
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic Toán học và các
                ngôn
                ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin trong các
                trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong
                muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về những logic
                Toán
                học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công nghệ
                thông
                tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào ngành công nghệ
                thông
                tin như mong muốn mà chỉ...
              </div>
              <div class="mt-3 description">Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị về
                những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
                ngành
                công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                ngành
                công nghệ thông tin như mong muốn mà chỉ...Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất
                thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại học
                vào
                các ngành công nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                được
                vào ngành công nghệ thông tin như mong muốn mà chỉ...
              </div>
            </div>

          </div>
        </div>

        <div class="py-4 col-12 col-xl-5 col-order-3 blog__left">
          <div class="col-0 blog__left-img">

          </div>

          <div class="col-0 list-course">
            <div class="mt-5 title event-header">Các khóa học
              <div class="line"></div>
            </div>
            <div class="mt-4">
              <div class="description list-couse__item">Phân tích dữ liệu</div>
              <div class="description list-couse__item">Kĩ sư dữ liệu</div>
              <div class="description list-couse__item">Khoa học dữ liệu</div>
              <div class="description list-couse__item">Lập trình ứng dụng</div>
            </div>
          </div>

          <form class="row g-3 needs-validation blog__form" novalidate>
            <h4 class="blog__form-title">Đăng ký tư vấn khóa học</h4>
            <div class="col-12 form-input">
              <label for="validationCustom01" class="form-label">Họ và tên</label>
              <input type="text" class="form-control" id="validationCustom01" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-12 form-input">
              <label for="validationCustom02" class="form-label">Email</label>
              <input type="text" class="form-control" id="validationCustom02" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>

            <div class="col-12 form-input">
              <label for="validationCustom02" class="form-label">Số điện thoại</label>
              <input type="text" class="form-control" id="validationCustom02" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>

            <div class="col-12 form-input">
              <label for="validationCustom04" class="form-label">Khóa học mà bạn muốn tư vấn</label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value=""></option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>

            <div class="d-flex justify-content-center pb-4 col-12">
              <button class="btn btn-dark form-submit" type="submit">Đăng ký tư vấn</button>
            </div>
          </form>

        </div>

        <div class="pt-4 pb-5 col-12 col-order-2 related-posts">
          <div class="center title position-relative">Các bài đăng liên quan
            <div class="line"></div>
          </div>
          <div class="mt-4 row">
            <div class="mt-4 col-12 col-xl-4">
              <div class="mt-4 education__item position-relative">
                <div class="related-posts__img"></div>
                <div class="mt-4 title--small">Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó
                  như
                  nào</div>
                <div class="mb-4 description">Với sự tìm hiểu từ cấp 3, em cảm thấy ngành phần mềm về công nghệ rất thú
                  vị
                  về
                  những logic Toán học và các ngôn ngữ lập trình
                  . Sau đó em có đăng kí thi đại học vào cách ngành công nghệ thông tin trong các trường đại học trên Hà
                  Nội, tuy nhiên em lại không
                  đủ điểm tiêu chí để được vào ngành công nghệ thông tin...</div>
                <div class="see-more">Xem thêm</div>
              </div>

            </div>

            <div class="mt-4 col-0 col-xl-4">
              <div class="mt-4 education__item position-relative">
                <div class="related-posts__img"></div>
                <div class="mt-4 title--small">Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó
                  như
                  nào</div>
                <div class="mb-4 description">Với sự tìm hiểu từ cấp 3, em cảm thấy ngành phần mềm về công nghệ rất thú
                  vị
                  về
                  những logic Toán học và các ngôn ngữ lập trình
                  . Sau đó em có đăng kí thi đại học vào cách ngành công nghệ thông tin trong các trường đại học trên Hà
                  Nội, tuy nhiên em lại không
                  đủ điểm tiêu chí để được vào ngành công nghệ thông tin...</div>
                <div class="see-more">Xem thêm</div>
              </div>

            </div>
            <div class="mt-4 col-0 col-xl-4">
              <div class="mt-4 education__item position-relative">
                <div class="related-posts__img"></div>
                <div class="mt-4 title--small">Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã vượt qua nó
                  như
                  nào</div>
                <div class="mb-4 description">Với sự tìm hiểu từ cấp 3, em cảm thấy ngành phần mềm về công nghệ rất thú
                  vị
                  về
                  những logic Toán học và các ngôn ngữ lập trình
                  . Sau đó em có đăng kí thi đại học vào cách ngành công nghệ thông tin trong các trường đại học trên Hà
                  Nội, tuy nhiên em lại không
                  đủ điểm tiêu chí để được vào ngành công nghệ thông tin...</div>
                <div class="see-more">Xem thêm</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  
  `

  const event = document.querySelector('.event')
  event.style.marginTop = '86px '
  const article = document.querySelector('.article')
  article.style.paddingBottom = '0px'
}

blog.addEventListener('click', handleClickBlog)