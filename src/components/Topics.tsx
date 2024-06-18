import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

const posts = [
    {
      id: 1,
      title: 'Continual and Lifelong Machine Learning',
      description:
        'Techniques and algorithms that enable continual learning and adaptation over time, preserving knowledge while accommodating new data and tasks.',
    },
    {
      id: 2,
      title: 'Learning from High-speed Data Streams',
      description:
        'Methods for learning from continuously arriving data, where traditional batch learning and fully supervised approaches are impractical.',
    },
    {
      id: 3,
      title: 'Machine Unlearning',
      description:
        'Techniques to remove specific knowledge or biases from a model\'s learned representations, allowing for both removal of outdated knowledge and adapting to evolving nature of data (such as changing privacy / ethical considerations).',
    },
    {
      id: 4,
      title: 'Test-time Adaptation',
      description:
        'Approaches that enable models to adapt their behavior during inference based on the specific characteristics of the input data or the environment, such as presence of concept drift.',
    },
    {
      id: 5,
      title: 'Adaptive TinyML',
      description:
        "Techniques and methodologies for implementing adaptive machine learning models on resource-constrained devices, enabling continuous learning and adaptation in edge computing scenarios.",
    },
    {
      id: 6,
      title: 'Continual Multi-task Learning',
      description:
        'Methods that allow models to learn multiple tasks simultaneously, leveraging shared knowledge and enhancing generalization.',
    },
    {
      id: 7,
      title: 'Continual Transfer Learning',
      description:
        "Approaches for transferring knowledge from one domain or task to another, improving learning efficiency and performance in new environments.",
    },
    {
      id: 8,
      title: 'Continual Open-world Learning',
      description:
        "Strategies to recognize and handle unknown classes or concepts during training and inference, ensuring models can operate effectively in open-world scenarios.",
    },
    {
      id: 9,
      title: 'Out-Of-Distribution Detection',
      description:
        'Techniques to identify data samples that do not belong to the training distribution, crucial for maintaining model reliability and safety.',
    },
    {
      id: 10,
      title: 'Few-shot Learning',
      description:
        'Algorithms capable of learning new concepts from a few labeled examples, mimicking human-like rapid learning abilities, especially in continual and lifelong learning scenarios.',
    },
]

export function Topics() {
    return (
        <section
          id="topics"
          className="relative overflow-hidden bg-blue-100 py-4"
        >
      <div className="bg-white py-24 sm:py-32 rounded-4xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Topics of interest</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              What area of expertise are you interested in? Here are some of the topics we will be covering at the workshop.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      </section>
    )
  }