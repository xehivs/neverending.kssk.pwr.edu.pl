import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'


export function About() {
  return (
    <div>
    <section
      id="about"
      className="relative overflow-hidden bg-blue-100 pt-16 pb-16"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg">
          {/* <h2 className="font-display text-3xl tracking-tight text-slate sm:text-4xl">
            About NML
          </h2> */}
          <p className="mt-4 text-lg tracking-tight text-slate text-wrap mb-4">
          The landscape of machine learning is evolving beyond the traditional paradigm where models are trained and tested on stationary datasets. Real-world applications increasingly demand adaptability to changing data distributions, continuous learning of new tasks, and the ability to handle evolving environments. The Neverending Machine Learning (NML) workshop aims to explore and advance techniques that enable lifelong learning, adaptive modeling, and robustness in the face of dynamic data scenarios.
          
          </p>
          <p>
            <strong>Objective:</strong> The workshop aims to bring together researchers and practitioners interested in advancing the capabilities of machine learning systems beyond traditional static datasets. Participants will explore cutting-edge research, share insights, and discuss challenges and opportunities in developing truly adaptive and evolving machine learning solutions.
          </p>
          <p className='mt-2'>        
            <strong>Format:</strong> The workshop will feature keynote presentations by leading experts, contributed paper presentations, and interactive panel discussions. Participants will have the opportunity to engage in hands-on sessions and collaborative activities aimed at fostering innovation and networking among attendees.
          </p>
          <p className='mt-2'>
            <strong>Target Audience:</strong> Researchers, practitioners, and students working in machine learning, artificial intelligence, data science, and related fields are encouraged to participate. Participants with expertise or interest in lifelong learning, adaptive systems, and dynamic data environments will find the workshop particularly relevant.
          </p>
        </div>
      </Container>
    </section>
    </div>
  )
}
