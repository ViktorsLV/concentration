const links = [
  { name: 'Other Games', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Our Vision', href: '#' }
];
const stats = [
  { name: 'Games made', value: '5' },
  { name: 'Worldwide players', value: '1M+' },
  { name: 'Countries reached', value: '80' },
  { name: 'Time having fun', value: 'Unlimited' }
];

const About = () => {
  return (
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi quis sem nibh id
          elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
        </p>
      </div>
      <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
        <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white duration-300 hover:opacity-90 gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name} <span aria-hidden="true">&rarr;</span>
            </a>
          ))}
        </div>
        <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse">
              <dt className="text-lg leading-7 text-gray-300">{stat.name}</dt>
              <dd className="text-4xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;
