/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('have URL defined', function() {
            for (var i=0;i<allFeeds.length;i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe("");
            };
        });  

        it('have name defined', function() {
            for (var i=0;i<allFeeds.length;i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");
            };
        });  

    });

    describe('The menu', function() {

        it('should be hidden', function() {
            expect($('.menu-hidden .menu').length).not.toBe(0);
        });

        it('is displayed when clicked', function() {
            expect($('.menu-hidden .menu').length).not.toBe(0);
            $('.menu-icon-link').click();
            expect($('.menu-hidden .menu').length).toBe(0);
            $('.menu-icon-link').click();
            expect($('.menu-hidden .menu').length).not.toBe(0);
        });

    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0,done);
        });

        it('are loaded by loadfeed', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    describe('New Feed Selection', function() {

        var currentContent;

        beforeEach(function(done) {
            loadFeed(0,function() {
                currentContent = $('.feed .entry').innerHTML;
                loadFeed(1,done);
            });
        });

        it('changes content for entries', function() {
            expect($('.feed .entry').length).not.toBe(currentContent);
        });
    });

}());
