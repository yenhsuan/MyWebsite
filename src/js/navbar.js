import $ from 'jquery';

export const registerNavBarScrollEffect = () => {
  $(window).on('scroll', () => {
    const top = $(window).scrollTop();
    if (top >= 40) {
      $('.navbar').addClass('hide-background');
    } else {
      $('.navbar').removeClass('hide-background');
    }
  });
};

export const registerNavBarSpyEffect = () => {
  $(window).on('scroll', () => {
    const curTop = $(window).scrollTop();
    const sections = $('.scroll-spy');

    sections.each((index, section) => {
      const sectionTop = $(section).offset().top;
      const sectionBottom = sectionTop + $(section).height();
      if (curTop >= sectionTop && curTop <= sectionBottom) {
        const id = $(section).attr('id');
        const navItem = $(`a[href="#${id}"]`);
        navItem.parent().addClass('active').siblings().removeClass('active');
      }
    });
  });
};

export const registerSmoothScrollingEffect = () => {
  $('.nav-item__link').each((index, item) => {
    $(item).click((e) => {
      e.preventDefault();
      const tag = $(e.target).attr('href');
      const target = $(tag);
      $('html, body').animate({ scrollTop: target.offset().top }, 'slow');
    });
  });
};
