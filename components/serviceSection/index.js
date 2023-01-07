import s from './serviceSection.module.css'

export default function ServiceSection() {
  const data = [
    {
      title: 'Free Products',
      desc: 'We offer a Range of free software, tools, and resources to help clients achieve their goals. These may include software, tools, or other resources',
    },
    {
      title: 'Premium Services',
      desc: 'Custom software development and consulting services for a fee. Our team has the skills and experience to help your project succeed.',
    },
    {
      title: 'Support and Maintenance',
      desc: 'Ongoing support and maintenance for all products and services, including technical support and updates. Premium services may have additional fees',
    },
  ]

  return (
    <div className={s.body}>
      {data.map((item, i) => (
        <div className={s.column} key={i}>
          <p className={s.number}>{i + 1}</p>
          <h4>{item.title}</h4>
          <p className={s.description}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
