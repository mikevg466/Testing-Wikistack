const Page = require('../models').Page;
const chai = require ('chai');
const expect = chai.expect;
const Promise = require('bluebird');

Page.sync({force: true});
describe("Page Model", function(){
  var page2;
  before(function(done){

        let page = Page.build({title: "test title", content: "#content header"});
        page.set('tags','find, me, you, sir');
        page2 = Page.build({title: "another title2", content: "#content header"});
        page2.set('tags','find, to, be, you, sir');
        var page3 = Page.build({title: "grocery list", content: "#content header"});
        page3.set('tags','cheese, chicken, bread, groceries');

        Promise.all([page.save(),page2.save(),page3.save()]).then(()=>done());
        // page.save()  //Promise.all??
        // .then(()=> page2.save())
        // .then(()=>done()); // the data needs to be saved to db... db calls are async

      })
  describe("Validations", function(){

    it("has 5 given columns: title, urlTitle, content, status, and tags", function(){

    });

    it("Does not allow null for title, urlTitle, and content", function(){

    });

    it("Default value of the 'tags' field is []", function(){

    });
  });

  describe("Hooks",function(){
    it("urlTitle field on contains alphanumeric characters or '_'", function(){

    });
    it("urlTitle is a variation of title", function(){

    });
  });

  describe('Virtuals', function () {
    var page;
    beforeEach(function(){
      page = Page.build({title: "test title",urlTitle:"test_title", content: "#content header"});
    })
    describe('route', function () {
      it('returns the url_name prepended by "/wiki/"',()=>{
        expect(page.route).to.equal('/wiki/test_title');
      });
    });
    describe('renderedContent', function () {
      it('converts the markdown-formatted content into HTML',()=>{
        expect(page.renderedContent).to.equal('<p>#content header</p>\n');
      });
    });
  });

  describe('Class methods', function () {
    // before(function(done){
    //   page = Page.build({title: "test title", content: "#content header"});
    //   page.set('tags','find, me, you, sir');
    //   var page2 = Page.build({title: "another title2", content: "#content header"});
    //   page2.set('tags','find, to, be, you, sir');

    //   page.save()  //Promise.all??
    //   .then(()=> page2.save())
    //   .then(()=>done()); // the data needs to be saved to db... db calls are async

    // })
    describe('findByTag', function () {
      it('gets pages with the search tag',(done)=>{
        Page.findByTag('me').spread(values=>expect(values.title).to.equal('test title')).then(()=>done());
      });
      it('gets pages with the search tag',(done)=>{
        Page.findByTag('be').spread(values=>expect(values.title).to.equal('another title2')).then(()=>done());
      });
      it('does not get pages without the search tag',(done)=>{
        Page.findByTag('find').then(values=>expect(values).to.have.a.lengthOf(2)).then(()=>done());
      });
    });
  });

  describe('Instance methods', function () {
    describe('findSimilar', function () {

      it('never gets itself',()=>{
        page2.findSimilar().then(vals=>console.log(vals));
      });
      it('gets other pages with any common tags',()=>{

      });
      it('does not get other pages without any common tags',()=>{

      });
    });
  });


    describe("", function(){

      it("", function(){

      });

      it("", function(){

      });

      it("", function(){

      });
    });

      describe("", function(){

        it("", function(){

        });

        it("", function(){

        });

        it("", function(){

        });
      });

});
