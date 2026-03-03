let scrollY = 0; let mouseX = 0; let mouseY = 0;
$(window).on('scroll', function() { scrollY = $(window).scrollTop(); requestAnimationFrame(renderParallax); });
$(window).on('mousemove', function(e) { mouseX = (e.clientX / window.innerWidth) - 0.5; mouseY = (e.clientY / window.innerHeight) - 0.5; requestAnimationFrame(renderParallax); });

function renderParallax() {
    let bgX = mouseX * -30; let bgY = (mouseY * -30);
    $('.l-bg').css('transform', `translate(${bgX}px, ${bgY}px) scale(1.1)`);
    $('.l-front').css('transform', `translate(${mouseX * -80}px, ${(scrollY * -0.6) + (mouseY * -80)}px)`);
    $('.hero-text').css({ 'transform': `translate(${mouseX * 20}px, ${(scrollY * 0.4) + (mouseY * 20)}px)`, 'opacity': 1 - (scrollY / 800) });

    $('.img-box').each(function() {
        let boxOffset = $(this).offset().top; let windowHeight = $(window).height();
        if (scrollY + windowHeight > boxOffset && scrollY < boxOffset + $(this).height()) {
            let distance = scrollY - boxOffset;
            $(this).find('.inner-bg').css('transform', `translate(${mouseX * -40}px, ${(distance * 0.15) + (mouseY * -40)}px) scale(1.1)`);
        }
    });
}