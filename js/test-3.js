// Операции spread, reduce, приведение массива к объекту

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

  const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

const tagsStats = allTags.reduce((acc, tag) => {
  console.log('accStart',acc);

  if (acc[tag]) {
    acc[tag] += 1;

    console.log('acc[tag]', tag);
    return acc;
  }

    acc[tag] = 1;

    console.log('acc1',acc);

  return acc;
}, {});