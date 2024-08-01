// document.addEventListener('DOMContentLoaded', function() {
//      const postsContainer = document.getElementById('recent-posts');

//     function loadPosts() {
//         fetch("posts.json")
//             .then(response => response.json)
//             .then(posts => {
//                 postsContainer.innerHTML = '';

//                 posts.forEach(post => {
//                     const listItem = document.createElement('li');
//                     const link = document.createElement('a');
//                     link.href = post.url;
//                     link.textContent = post.title;
//                     listItem.appendChild(link);
//                     postsContainer.appendChild(listItem);
//                 });
//             }).catch(error => console.error('Error loading posts:', error));
//     }

//     loadPosts();
// });
