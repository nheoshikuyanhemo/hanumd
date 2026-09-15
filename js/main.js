/* Hanum portfolio — Pante-style typewriter and reveal engine */
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    function typeWriter(element, text, speed) {
        element.textContent = '';
        const cursor = document.createElement('span');
        cursor.className = 'tw-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        element.appendChild(cursor);

        let index = 0;
        (function step() {
            if (index < text.length) {
                cursor.insertAdjacentText('beforebegin', text.charAt(index));
                index += 1;
                window.setTimeout(step, speed);
            } else {
                cursor.remove();
            }
        })();
    }

    function openTextElement(element) {
        if (element.dataset.typed === '1') return;
        element.dataset.typed = '1';
        const text = element.dataset.type || element.textContent;
        const requestedSpeed = Number.parseInt(element.dataset.speed, 10) || 30;
        const speed = Math.min(requestedSpeed, 20);
        typeWriter(element, text, speed);
    }

    function typeSequence(elements) {
        let index = 0;

        function next() {
            if (index >= elements.length) return;
            const element = elements[index];
            index += 1;

            if (element.dataset.typed === '1') {
                next();
                return;
            }

            openTextElement(element);
            const text = element.dataset.type || '';
            const requestedSpeed = Number.parseInt(element.dataset.speed, 10) || 30;
            const speed = Math.min(requestedSpeed, 20);
            const estimate = text.length * speed + 150;
            window.setTimeout(next, estimate);
        }

        next();
    }

    function openBlock(block) {
        if (block.classList.contains('visible')) return;
        block.classList.add('visible');

        const texts = Array.from(
            block.querySelectorAll('.typewriter[data-type]')
        );
        typeSequence(texts);

        block.querySelectorAll('.reveal-item').forEach(function(item, index) {
            window.setTimeout(function() {
                item.classList.add('visible');
            }, 150 + index * 100);
        });
    }

    function closeBlock(block) {
        if (!block.classList.contains('visible')) return;
        block.classList.remove('visible');

        block.querySelectorAll('.typewriter[data-type]').forEach(function(element) {
            element.dataset.typed = '0';
            element.textContent = '';
        });
        block.querySelectorAll('.reveal-item').forEach(function(item) {
            item.classList.remove('visible');
        });
    }

    function reserveTypewriterSpace() {
        document.querySelectorAll('.typewriter[data-type]').forEach(function(element) {
            const previousText = element.textContent;
            element.textContent = element.dataset.type || '';
            element.style.minHeight = element.offsetHeight + 'px';
            element.textContent = previousText;
        });
    }

    reserveTypewriterSpace();

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    openBlock(entry.target);
                } else {
                    closeBlock(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -5% 0px'
        });

        document.querySelectorAll('.reveal-block').forEach(function(block) {
            observer.observe(block);
        });
    } else {
        document.querySelectorAll('.reveal-block').forEach(openBlock);
    }

    window.addEventListener('load', reserveTypewriterSpace);
    window.addEventListener('resize', reserveTypewriterSpace);

    /* Navigation: only hash links need custom handling. Normal page links must
       keep their default behavior so Learn More / View Portfolio / Contact work. */
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
});
