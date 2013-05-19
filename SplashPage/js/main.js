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
    $('.photo-container').attr('id', 'photo' + targetID)
});

var tabContent = [
    "<h2>About</h2><p>The Pineapple project was inspired by a friend’s travels to Mesoamerica and Africa: farmers shared stories of frustration with the lack of resources available for existing or potential farmers to make informed planting decisions. They explained that due to the scarcity of information available, often a less than optimum species or variety of a crop is planted, exhausting limited land and resources needed to augment dietary needs and supplement revenues such as the orphanage that this pineapple grove supports.</p><p>After requesting and researching resources, we learned that leading food security experts have also identified a lack of quality and actionable information for existing and potential farmers.</p><p>Thus, we developed the Pineapple Project. Our goal is to help farmers in developing nations choose the crops that are most likely to thrive on their land, thus helping them to optimize the use of their time and resources.</p><p>Using expert input and assistance from GN we began by developing a spreadsheet to centralize all publicly available information we could find related to crop climate constraints. However, we quickly discovered inconsistencies in resources for tropical crops. Currently we have decided to limit our database and schema to less than a dozen common cash crops found in the tropics and only a few climate constraints. Later we would like to expand this dataset using crowdsourced input.</p><p>At the heart of our solution is our recommendation engine, a tool that matches crop data with information related to variables that could influence the optimal crop planting decisions. As our solutions become more robust, we’d also like the capability to include aspects such as pricing.</p><p>The pineapple project has a lot of needs, but data continues to be one of our biggest challenges. In particular we are seeking climate constraints for crops found in the equatorial regions of the world as well as precipitation and temperature data sets.</p>",
    "<h2>Team</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ipsum, molestias tempore nobis laboriosam mollitia saepe ducimus consequuntur ratione esse facilis corporis laborum iure quia quasi et exercitationem at ullam!</p><p>Sit, fugit, consectetur, quia earum perspiciatis voluptates eveniet reiciendis minus dicta repellendus mollitia deserunt doloribus animi debitis laboriosam adipisci repudiandae aliquam dolorem nisi itaque odit sapiente est possimus reprehenderit expedita.</p><p>Temporibus, dolore dolores rem esse placeat quaerat deserunt exercitationem quos sunt rerum ipsam sed beatae excepturi commodi est non itaque eaque consequatur. Cupiditate sed voluptatibus ipsum architecto eius vitae eligendi.</p><p>Ullam, ab, consectetur deleniti autem cupiditate excepturi neque quibusdam veritatis eligendi aperiam dolore est at fugiat voluptas quis unde eius. Neque quo temporibus ratione assumenda fugiat ex maxime? Corporis, illum?</p><p>Rerum, illum, animi, necessitatibus, voluptate ea laudantium beatae earum at minus voluptatibus neque odio optio perspiciatis voluptatem suscipit cumque consequatur sapiente voluptatum eveniet repellat repellendus accusantium quos. Corrupti, molestiae, blanditiis.</p>",
    "<h2>Partners</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ipsum, molestias tempore nobis laboriosam mollitia saepe ducimus consequuntur ratione esse facilis corporis laborum iure quia quasi et exercitationem at ullam!</p><p>Sit, fugit, consectetur, quia earum perspiciatis voluptates eveniet reiciendis minus dicta repellendus mollitia deserunt doloribus animi debitis laboriosam adipisci repudiandae aliquam dolorem nisi itaque odit sapiente est possimus reprehenderit expedita.</p><p>Temporibus, dolore dolores rem esse placeat quaerat deserunt exercitationem quos sunt rerum ipsam sed beatae excepturi commodi est non itaque eaque consequatur. Cupiditate sed voluptatibus ipsum architecto eius vitae eligendi.</p><p>Ullam, ab, consectetur deleniti autem cupiditate excepturi neque quibusdam veritatis eligendi aperiam dolore est at fugiat voluptas quis unde eius. Neque quo temporibus ratione assumenda fugiat ex maxime? Corporis, illum?</p><p>Rerum, illum, animi, necessitatibus, voluptate ea laudantium beatae earum at minus voluptatibus neque odio optio perspiciatis voluptatem suscipit cumque consequatur sapiente voluptatum eveniet repellat repellendus accusantium quos. Corrupti, molestiae, blanditiis.</p>",
    "<h2>Contact</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, ipsum, molestias tempore nobis laboriosam mollitia saepe ducimus consequuntur ratione esse facilis corporis laborum iure quia quasi et exercitationem at ullam!</p><p>Sit, fugit, consectetur, quia earum perspiciatis voluptates eveniet reiciendis minus dicta repellendus mollitia deserunt doloribus animi debitis laboriosam adipisci repudiandae aliquam dolorem nisi itaque odit sapiente est possimus reprehenderit expedita.</p><p>Temporibus, dolore dolores rem esse placeat quaerat deserunt exercitationem quos sunt rerum ipsam sed beatae excepturi commodi est non itaque eaque consequatur. Cupiditate sed voluptatibus ipsum architecto eius vitae eligendi.</p><p>Ullam, ab, consectetur deleniti autem cupiditate excepturi neque quibusdam veritatis eligendi aperiam dolore est at fugiat voluptas quis unde eius. Neque quo temporibus ratione assumenda fugiat ex maxime? Corporis, illum?</p><p>Rerum, illum, animi, necessitatibus, voluptate ea laudantium beatae earum at minus voluptatibus neque odio optio perspiciatis voluptatem suscipit cumque consequatur sapiente voluptatum eveniet repellat repellendus accusantium quos. Corrupti, molestiae, blanditiis.</p>"
]
