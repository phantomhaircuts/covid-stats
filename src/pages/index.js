import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <h2>Global:</h2>
    <Stats url='https://covid19.mathdro.id/api'></Stats>
    <CountrySelector></CountrySelector>
    </div>
  </Layout>
)

export default IndexPage
