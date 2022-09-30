import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useQuery, gql } from '@apollo/client'

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false })

const GET_ALL_DYNAMIC_PRODUCT_PASSPORTS = gql`
    query AllDynamicProductPassports {
        allDynamicProductPassports {
            id
            qruid
            createdAt
            updatedAt
            repairs {
                id
                description
                createdAt
            }
        }
    }
`

const Home: NextPage = () => {
    const { loading, error, data } = useQuery(GET_ALL_DYNAMIC_PRODUCT_PASSPORTS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return <ReactJson theme="bright" src={data} />
}

export default Home
