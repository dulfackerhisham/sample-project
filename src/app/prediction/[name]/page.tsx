const fetchPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`)
    return res.json()
}

const fetchPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`)
    return res.json()
}

const fetchPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json()
}

interface Params {
    params: {name: string}
}
const page = async ({params}: Params) => {
    const ageData = fetchPredictedAge(params.name)
    const genderData = fetchPredictedGender(params.name)
    const countryData = fetchPredictedCountry(params.name)

    const [age, gender, country] = await Promise.all([
        ageData,
        genderData,
        countryData])
  return (
    <div>
        <div>Personl Info</div>
        <div> Age: {age?.age}</div>
        <div> Gender: {gender?.gender}</div>
        <div> Country: {country?.country[0]?.country_id}</div>
    </div>
  )
}

export default page