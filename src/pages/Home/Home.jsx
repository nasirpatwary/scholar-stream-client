import Container from "../../shared/Container"
import BrandLogo from "../../sections/BrandLogo"
import Testimonials from "../../sections/Testimonials"
import FAQSection from "../../sections/FAQSection"
import Banner from "../../sections/Banner"

const Home = () => {
  return (
    <>
     <title>Home || Scholarship</title>
     <Banner />
    <Container>
     <BrandLogo />
     <Testimonials />
     <FAQSection />
    </Container>
    </>
  )
}

export default Home