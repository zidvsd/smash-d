import { ContactMap } from "../ContactMap"
import { ContactForm } from "../ContactForm"
const FindUs = () => {
  return (
    <section id="find-us" className="py-12">
      <div className="grid gap-12 lg:grid-cols-5">
        <ContactMap />
        <ContactForm />
      </div>
    </section>
  )
}

export default FindUs
