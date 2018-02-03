// This is TEST Data for the Template.
let posts =
[{
  postDate: 'Jan 30',
  postURL: '#',
  postTitle: 'Understanding Primitives',
  sidePostContent: "A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types..."
},
{
  postDate: 'Jan 2',
  postURL: 'http://exploringjs.com/es6/ch_destructuring.html',
  postTitle: 'Destructuring',
  sidePostContent: "Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays. It can be used..."
},
{
  postDate: 'Dec 3',
  postURL: 'https://medium.com/@deniswells59/singly-linked-lists-with-javascript-81859a5a5095"',
  postTitle: 'Singly Linked List',
  sidePostContent: "In a linked list, a node has a pointer to the next node. So, what would that look like in JS? We explore in this post..."
}];

let fact = {
  dailyFactTitle: `>Meet Google Home Max - Google's latest response to Amazon Alexa ...
  a constant battle in the tech-iverse to capture every ounce of human
  data by eavesdropping on all of our conversations. I hear... it has
  pretty great speakers too.`,
  dailyFactURL: 'https://waterswv.github.io'

}

let word = {
  dailyWord: 'Divest',
  dailyWordURL: 'https://www.merriam-webster.com/dictionary/divest'
}

let mainPost = {
  postTitle: `<h2>A bootcamp grad's take on learning to code <br/>
  and how it could be a little smoother.</h2>`,
  postContent: `

  <span class="image featured"><img src="images/pic04.jpg" alt="" /></span>
  <h3>A case for why</h3>
  <p>I want to start this off by saying how much I value my bootcamp experience
  and that I don't regret any part of my decision to commit to the fulltime
  immersive program. While I certainly struggled with the decision, and for several
  years honestly, it was almost entirely due to my financial situation. Bootcamp,
  like all school frankly, is 80% about what you put into and a lesser 20% based
  on the actual curriculum or the support group that is involved. That being said,
  I think there are a few things that could be expanded with curriculum examples
  that could drastically improve absorption and understanding of core
  comptencies.
  </p>
  <h3>Know your Audience</h3>
  <p>The reality is that perceived 'simple' examples for experts are fairly
  confusing for newer entrants to the devlopment medium. I for one, have
  several years of prior experience where I learned both C++ and Java.
  However, even with that background I've struggled with taking examples
  and building on top of them with other concepts.  </p>
  <p>Moreover, generaly logic is vastly different than programming logic.
  Any person who is switching careers, say from a non-business profession
  will be at fairly significant disadvantage. There is a common theme in
  reporting that there are significant STEM jobs but not enough qualified
  applicants. An important step in filling those gaps is creating an environment
  for people to learn those skills, and it shouldn't be reserved for just young
  students.</p>
  <p>With these ideas in mind, a 'novice' approach would be to break
  examples down even further and generate a hand-holding approach that could
  help older entrants with the core building blocks for development.</p>
  <h3>A few examples</h3>
  <p>There are several good resources that get most of the way there
  but they are not friendly for newbies. <br/><span>
  <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map'
  target='_blank'>Mozilla Developer Network</a>, <br/></span>
  <span><a href='https://www.w3schools.com/js/js_regexp.asp'
  target='_blank'>W3Schools</a>, <br/></span>
  <span><a href='https://medium.com/front-end-hacking/understanding-async-await-c9a267e2d96d'
  target='_blank'>Async/Await Blog Post</a>, </span>
  </p>
  <p>All of the above resources have contributors who, in many cases,
  have spent many hours and resources on building out strong examples, but
  when it comes to creating tutorials for aspiring technologists from liberal arts
  or more verbal professions creating actual examples with real examples and not someFunc()<br/>
  <strong>Poor Example:</strong>
  <pre style='background-color: #efefef; font-family: Source Code Pro, monospace; font-size: 15px;'>
    async function someTask() {
    // this will execute some task
    console.log('this will print second');
    }
    await function someOtherTask(){
    // this will execute some other task
    console.log('this will print 1st');
    }
  </pre>
  Can you discern what is actually going on with the example above? There have been so many
  times when I've been trying to implement someone elses example where my usecase is subtely
  different. The problem arises when the example is so generic it becomes hard to grasp
  the proper context of how the solution can be modified. This just exacerbates your
  frustration as a newer developer because you just have enough experience to pickup most
  context clues.
  </p>

  `
}
// Grab each Post object and iterate to publish to the page.
// posts.forEach( post => {$('#sidebar > #sideposts > .divided').append(sidePostTemplate(post));});
// $('.divided > li > .dailyfact').append(dailyFactTemplate(fact));
// $('.divided > li > .dailyword').append(dailyWordTemplate(word));
// $('#content > .mainpost').append(mainPostTemplate(mainPost));
