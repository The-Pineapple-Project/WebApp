var $pineapple = $('#logo-left');
var startAngle = 0;
var globalTimer;

$('#logo').mouseenter(function () {
    rotate($pineapple, startAngle);
}).mouseleave(function () {
    stopRotation();
});

// Makes the pineapple spin when user hovers over the logo
function rotate (el, angle) {
    el.css({
        transform: 'rotate(' + angle + 'deg)'
    });

    globalTimer = setTimeout(function () {
        startAngle = ++angle;
        rotate(el, angle, globalTimer);
    },25);
}

function stopRotation () {
    window.clearInterval(globalTimer);
}

$('.tab-row li').on('click', function () {
    var currentTab = $('.current');
    currentTab.removeClass('current');
    targetID = $(this).attr('id').substring(3);
    $(this).addClass('current');
    $('.photo-overlay').html(tabContent[targetID]);
    $('.photo-container').css('background-image', 'url(../img/tab' + targetID + '.jpg)');
});

var tabContent = ["<h2>About</h2><p>The Pineapple project was inspired by recent travels with EWB-JSC &amp; OI to Mesoamerica and Africa: farmers shared stories of frustration with the lack of resources available for existing or potential farmers  to make informed planting decisions. They explained that due to the scarcity of information available, often a less than optimum species or variety of a crop is planted, exhausting limited land and resources needed to augment dietary needs and supplement revenues such as the orphanage this pineapple grove supports.</p><p>After requesting and researching resources, we learned that leading food security experts have also identified an lack of quality and actionable information for existing and potential farmers.</p><p>Thus, we developed the Pineapple Project</p>","<h2>Team</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ipsum, molestias tempore nobis laboriosam mollitia saepe ducimus consequuntur ratione esse facilis corporis laborum iure quia quasi et exercitationem at ullam!</p><p>Sit, fugit, consectetur, quia earum perspiciatis voluptates eveniet reiciendis minus dicta repellendus mollitia deserunt doloribus animi debitis laboriosam adipisci repudiandae aliquam dolorem nisi itaque odit sapiente est possimus reprehenderit expedita.</p><p>Temporibus, dolore dolores rem esse placeat quaerat deserunt exercitationem quos sunt rerum ipsam sed beatae excepturi commodi est non itaque eaque consequatur. Cupiditate sed voluptatibus ipsum architecto eius vitae eligendi.</p><p>Ullam, ab, consectetur deleniti autem cupiditate excepturi neque quibusdam veritatis eligendi aperiam dolore est at fugiat voluptas quis unde eius. Neque quo temporibus ratione assumenda fugiat ex maxime? Corporis, illum?</p><p>Rerum, illum, animi, necessitatibus, voluptate ea laudantium beatae earum at minus voluptatibus neque odio optio perspiciatis voluptatem suscipit cumque consequatur sapiente voluptatum eveniet repellat repellendus accusantium quos. Corrupti, molestiae, blanditiis.</p>","<h2>Partners</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ipsum, molestias tempore nobis laboriosam mollitia saepe ducimus consequuntur ratione esse facilis corporis laborum iure quia quasi et exercitationem at ullam!</p><p>Sit, fugit, consectetur, quia earum perspiciatis voluptates eveniet reiciendis minus dicta repellendus mollitia deserunt doloribus animi debitis laboriosam adipisci repudiandae aliquam dolorem nisi itaque odit sapiente est possimus reprehenderit expedita.</p><p>Temporibus, dolore dolores rem esse placeat quaerat deserunt exercitationem quos sunt rerum ipsam sed beatae excepturi commodi est non itaque eaque consequatur. Cupiditate sed voluptatibus ipsum architecto eius vitae eligendi.</p><p>Ullam, ab, consectetur deleniti autem cupiditate excepturi neque quibusdam veritatis eligendi aperiam dolore est at fugiat voluptas quis unde eius. Neque quo temporibus ratione assumenda fugiat ex maxime? Corporis, illum?</p><p>Rerum, illum, animi, necessitatibus, voluptate ea laudantium beatae earum at minus voluptatibus neque odio optio perspiciatis voluptatem suscipit cumque consequatur sapiente voluptatum eveniet repellat repellendus accusantium quos. Corrupti, molestiae, blanditiis.</p>","<h2>Contact</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ipsum, molestias tempore nobis laboriosam mollitia saepe ducimus consequuntur ratione esse facilis corporis laborum iure quia quasi et exercitationem at ullam!</p><p>Sit, fugit, consectetur, quia earum perspiciatis voluptates eveniet reiciendis minus dicta repellendus mollitia deserunt doloribus animi debitis laboriosam adipisci repudiandae aliquam dolorem nisi itaque odit sapiente est possimus reprehenderit expedita.</p><p>Temporibus, dolore dolores rem esse placeat quaerat deserunt exercitationem quos sunt rerum ipsam sed beatae excepturi commodi est non itaque eaque consequatur. Cupiditate sed voluptatibus ipsum architecto eius vitae eligendi.</p><p>Ullam, ab, consectetur deleniti autem cupiditate excepturi neque quibusdam veritatis eligendi aperiam dolore est at fugiat voluptas quis unde eius. Neque quo temporibus ratione assumenda fugiat ex maxime? Corporis, illum?</p><p>Rerum, illum, animi, necessitatibus, voluptate ea laudantium beatae earum at minus voluptatibus neque odio optio perspiciatis voluptatem suscipit cumque consequatur sapiente voluptatum eveniet repellat repellendus accusantium quos. Corrupti, molestiae, blanditiis.</p>"]

