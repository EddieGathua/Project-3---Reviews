// local reviews data
const reviews = [
    {
      id: 1,
      name: "Lizzie Maguire",
      job: "Travel Agent",
      img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      text:
        "I enjoyed every minute while using product. It felt like a dream come true and I would highly recommend anyone who is interested in trying out something new to give this one a go.",
    },
    {
      id: 2,
      name: "Mary Jean",
      job: "React Developer",
      img:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      text:
        "In my line of work, spontaneity is highly appreciated, so, the first time I heard about this product I immediately knew that I had to give it a try. It has helped me achieve so much. It was so worth it!!!",
    },
    {
      id: 3,
      name: "Ranjit Singh",
      job: "DevOPs Engineer",
      img:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text:
        "Using this product has to be one of the best decisions I have ever made in my life. Not only has it made my life easier, it has made me more productive and even more energetic.",
    },
    {
      id: 4,
      name: "Billie Jean Amstrong",
      job: "Accountant",
      img:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text:
        "I have worked with similar products in the past and each time I was left very disappointed. The first time I heard about this product I was reluctant at first but upon using it, I realised I had been missing out on a lot. Thank You !!!",
    },
  ];

  // select items
 const image = document.getElementById('person-img');
 const job = document.getElementById('job');
 const author = document.getElementById('author');
 const info = document.getElementById('info');

 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');

 //set initial item
 let currentItem = 0;

 //load initial item
 window.addEventListener('DOMContentLoaded', (event) => {
     showPerson();
 });

 //show a person based on the item in the array
 function showPerson(){
    const item = reviews[currentItem];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
 }

 //show the next person
 nextBtn.addEventListener('click', () => {
     currentItem++;
     if(currentItem > reviews.length - 1){
         currentItem = 0;
     }
     showPerson();
 });

 //show previous person
 prevBtn.addEventListener('click', () => {
     currentItem--;
     if(currentItem < 0){
         currentItem = reviews.length - 1;
     }
     showPerson();
 });