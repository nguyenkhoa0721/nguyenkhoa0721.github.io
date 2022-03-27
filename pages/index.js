import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  Badge,
  ListItem,
  UnorderedList,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a software engineer 🇻🇳 !
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nguyen-Khoa Bui-Dinh
          </Heading>
          <p>Hard work pays off</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/nguyenkhoa.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Brief introduction
        </Heading>
        <Paragraph>
        I love coding and how amazing algorithms were created and always try to
become a better engineer with hands-on experience.{' '}<br/><br/>
            <b>Full-name: </b> Bùi Đình Nguyên Khoa<br/>
            <b>Email: </b> nguyenkhoa0721@gmail.com<br/>
            <b>Linkedin: </b> <Link>https://www.linkedin.com/in/buidinhnguyenkhoa/</Link>
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education & Work
        </Heading>
        <BioSection>
          <BioYear>2021 - Present</BioYear>
          Back-end engineer in DebiON
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated Honors Program, Faculty of Information Technology, University of Science HCMC
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Got Smart Contract & NFT certificate at 200Lab
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Freelancer AI engineer for project of ALTA Media Co.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Intern AI engineer in DeepHub
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Got AI - Machine learning basic certificate at Crosstech
        </BioSection>
        <Box align="center" my={4}>
          <NextLink href="https://github.com/nguyenkhoa0721" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Awards
        </Heading>
        <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}></Badge>
          Top 2st FTU VN Startup 2021 and Top 10th CiC 2021 and Top 5th S&IP
        </ListItem>
        <ListItem>
          <Badge mr={2}></Badge>
          Consolation prize in Sang Tao Ky Thuat Ho Chi Minh City 2020
        </ListItem>
        <ListItem>
          <Badge mr={2}></Badge>
          1st Giao Thong Xanh Ho Chi Minh City 2020
        </ListItem>
        <ListItem>
          <Badge mr={2}></Badge>
          Consolation prize in Vietnam Olympiad in Informatics 2019
        </ListItem>
        <ListItem>
          <Badge mr={2}></Badge>
          3rd prize in ViSef 2019 & 4th prize in ViSef 2018
        </ListItem>
        <ListItem>
          <Badge mr={2}></Badge>
          3rd prize in National Young Informatics 2018
        </ListItem>
        <ListItem>
          <Badge mr={2}></Badge>
          Bronze medal in traditional 30-4 Olympics 2017
        </ListItem>
      </UnorderedList>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
