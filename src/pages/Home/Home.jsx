import { useLoaderData } from "react-router"
import TopScholarship from "../../sections/TopScholarship"
import Container from "../../shared/Container"
import BrandLogo from "../../sections/BrandLogo"
import Testimonials from "../../sections/Testimonials"
import FAQSection from "../../sections/FAQSection"
import Banner from "../../sections/Banner"

const Home = () => {
  const {data} = useLoaderData()
  return (
    <>
     <title>Home || Scholarship</title>
     <Banner />
    <Container>
     <TopScholarship scholarships={data} />
     <BrandLogo />
     <Testimonials />
     <FAQSection />
    </Container>
    </>
  )
}

export default Home