//Comlex object with propeties as strings, objects and arrays

const blogPost = {
  title: "The First One",
  author: {
    name: "Hanifah",
    age: 19,
    favouriteColour: "Blue",
  },
  hashtags: ["#amazing", "#new", "#excited", "#nervous"],
  content: "This is my blog post",
};

console.log(blogPost.author.name); //Output = Hanifah
console.log(blogPost.hashtags[1]); //Output = #new
console.log(blogPost.hashtags.length); //Output = 3

for (let i = 0; i < blogPost.hashtags.length; i++) {
  console.log(blogPost.hashtags[i]); // Output: #amazing, #new, #excited, #nervous
}

for (let tag of blogPost.hashtags) {
  console.log(tag); // Output: #amazing, #new, #excited, #nervous
}

blogPost.hashtags.forEach((tag, index) => {
  console.log(`${index}: ${tag}`);
});
