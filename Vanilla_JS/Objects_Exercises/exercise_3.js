// Create a blog post object w the following properties in object literal syntax, 
// title, body, author, views, comments {author, body}, isLive

const blogPost = {
    title: 'The Best',
    body: 'I will be the best.',
    author: 'Devin Diaz',
    views: 1000,
    comments: [
        {author: 'D1 hater', body: 'Keep being delusional'},
        {author: 'D2 hater', body: 'Bro is nuts'}
    ],
    isLive: true
};

console.log(blogPost)

// Expanding from the exercise above, create a post object with a constructor function, however imagine 
// this scenario, the user has not published the post yet:

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
    this.views = 0;
    this.isLive = false;
}


