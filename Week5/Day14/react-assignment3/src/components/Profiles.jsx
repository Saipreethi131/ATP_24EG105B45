
import Profile from './Profile';

function Profiles() {
  const projects = [
    {
      id: 1,
      title: 'News App using ReactJS',
      description: 'News App using ReactJS. Parsing XML RSS Feed to JSON.',
      author: 'Mohd Kathari',
      image: 'https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/28021417/react-router-with-link-1024x925.png'
    },
    {
      id: 2,
      title: 'Medium-Like Blogging App Using Angular 9 and Firebase',
      description: 'Creating a Medium-Like Blog App Using Angular 9 and Firebase. Photo by Miguel A.',
      author: 'Mohd Kathari',
      image: 'https://tse3.mm.bing.net/th/id/OIP.t7rlEZnBN9FPLdK6EY8xlAHaEU?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      id: 3,
      title: 'COVID 19 Tracker (Statistics) app',
      description: 'COVID 19 Tracker (Statistics) app Using Angular Dark Mode. Demonstrates data visualization.',
      author: 'Mohd Kathari',
      image: 'https://www.systematica.net/content/uploads/2020/04/Covid19-App_Cover_01_COVER-copy-3.jpg'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Profile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Profiles;