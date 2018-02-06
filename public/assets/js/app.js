/*
// App.js will be used to call API to retrieve all posts.

$(document).ready( function(){


  // AJAX Calls for pulling in Posts, Word, Fact for each webpage.

$.ajax({
  method: 'GET',
  url: 'http://localhost:8000/api/post',
  success: onSuccessGeneratePosts
});

$.ajax({
  method: 'GET',
  url: 'http://localhost:8000/api/fact',
  success: onSuccessGenerateFacts
});

$.ajax({
  method: 'GET',
  url: 'http://localhost:8000/api/word',
  success: onSuccessGenerateWords
});


// Handling Functions built to generate HTML Snippets for each post,
// side-post, Factoid, and Word section on the blog.


  function onSuccessGeneratePosts(posts){

    // Pops most recent post out of array object and dispalys in main section of body.
    $('#content > .mainpost').append(mainPostTemplate(posts.pop()));

    // Grabs next 3 most recent posts in array and then prepends them to html.
    let sidePosts = posts.slice((posts.length-3), (posts.length));
    sidePosts.forEach( post => {$('#sidebar > #sideposts > .divided').prepend(sidePostTemplate(post));});

  }
  function onSuccessGenerateFacts(facts){

    // Grabs most recent fact object from ajax result & passes to page for display
    $('.divided > li > .dailyfact').append(dailyFactTemplate(facts[facts.length-1]));

  }
  function onSuccessGenerateWords(words){

    // Grabs most recent word object from ajax result & passes to page for display
    $('.divided > li > .dailyword').append(dailyWordTemplate(words[words.length-1]));

  }
  // Function to generate template HTML for each smaller sidePost.
  // function will place HTML in #sidebar section .divided divs.
  function sidePostTemplate(post){
    // TODO: Add TRUNCATE function to title for longer titles....

    // Formatting Mongo timestamp to display 'Month Day Year' ... add , 10 to remove year.
    let date = new Date(post.postDate);
    let postDate = date.toDateString().slice(4);

    let postHTML =
    `
    <li>
      <!-- Excerpt -->
        <article class="box excerpt">
          <header>
            <span class="date">${postDate}</span>
            <h3><a href="${post.postURL}" target='_blank'>${post.postTitle}</a></h3>
          </header>
          <p>${post.sidePostContent}
          </p>
        </article>
    </li>
    `
    return postHTML;
  }

  function dailyFactTemplate(fact){
    let factHTML =
    `
      <header>
        <h3><a href="#">Today in Facts</a></h3>
      </header>
      <a href="#" class="image left"><img src="images/pic06.jpg" alt="" /></a>
      <p>${fact.dailyFactTitle}</p>
      <ul class="actions">
        <li><a href="${fact.dailyFactURL}" class="button icon fa-file">Learn More</a></li>
      </ul>

    `
    return factHTML;
  }

  function dailyWordTemplate(word){
    let wordHTML =
    `
      <header>
        <h3><a href="#">Word of the Day!</a></h3>
      </header>
      <a href="#" class="image left"><img src="images/pic07.jpg" alt="" /></a>
      <p>Today's word of the day is <strong>${word.dailyWord}</strong></p>
      <ul class="actions">
        <li><a href="${word.dailyWordURL}" class="button icon fa-file" target='_blank'>Define It</a></li>
      </ul>

    `
    return wordHTML;
  }

  function mainPostTemplate(post){
    let postHTML =

    `
      <header>${post.postTitle}</header>
      ${post.postContent}
    `
    return postHTML;
  }



});
*/
