import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Paper',
    target: 'submission deadline',
    href: '#',
    date: 'September 10, 2024',
    datetime: '2024-09-10',
    icon: CheckIcon,
  },
  {
    id: 2,
    content: 'Author',
    target: 'notification date',
    href: '#',
    date: 'October 7, 2024',
    datetime: '2024-11-07',
    icon: CheckIcon,
  },
  // {
  //   id: 3,
  //   content: 'Requests for consideration of ',
  //   target: 'papers rejected from the main conference',
  //   href: '#',
  //   date: '8 July 2024',
  //   datetime: '2024-07-11',
  //   icon: CheckIcon,
  // },
  // {
  //   id: 4,
  //   content: 'Notification date for ',
  //   target: 'papers rejected from the main conference',
  //   href: '#',
  //   date: '18 July 2024',
  //   datetime: '2024-07-18',
  //   icon: CheckIcon,
  // },
  // {
  //   id: 5,
  //   content: 'Publication of final workshop schedule',
  //   target: '',
  //   href: '#',
  //   date: '8 August 2024',
  //   datetime: '2024-08-08',
  //   icon: CheckIcon,
  // },
  {
    id: 6,
    content: 'Camera-ready deadline and copyright form',
    target: '',
    href: '#',
    date: 'October 11, 2024',
    datetime: '2024-11-11',
    icon: CheckIcon,
  },
  {
    id: 7,
    content: '',
    target: 'Workshop date',
    href: '#',
    date: 'December 9, 2024',
    datetime: '2024-12-09',
    icon: CheckIcon,
  },
]

export function KeyDates() {
  return (
    <section id='keyDates' className='bg-blue-100 py-4'>
              <div className="bg-white py-24 sm:py-32 rounded-4xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Key dates</h2>

    <div className="flow-root mt-12">
      <ul role="list" className="">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className='bg-blue-500 h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                  >
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>

    <p className="mt-4 text-lg leading-8 text-gray-600">
    <strong>All times are at 11:59PM AoE unless otherwise stated</strong>
            </p>
          </div>
          </div>

    </section>
  )
}
