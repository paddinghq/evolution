import { RootState } from "@/app/Redux/slice/interface"
import { useSelector } from "react-redux"

const trends = [
  {
    event: 'Music',
    rate: 95,
  },
  {
    event: 'Concert',
    rate: 93,
  },
  {
    event: 'Classic Music',
    rate: 87,
  },
  {
    event: 'TravellingAndExpedition',
    rate: 82,
  },
  {
    event: 'Food',
    rate: 93,
  },
  {
    event: 'Cocktails',
    rate: 93,
  },
  {
    event: 'LinkinPark',
    rate: 93,
  },
  {
    event: 'NightShow',
    rate: 93,
  },
  {
    event: 'Badminton',
    rate: 93,
  },
  {
    event: 'SportMeet',
    rate: 93,
  },
  {
    event: 'Rally',
    rate: 93,
  },
  {
    event: 'Medicine',
    rate: 93,
  },
]
const loading = useSelector((state: RootState) => state.auth.userDetails)
console.log(loading)
const Trend = () => {
  return (
    <div className="py-5 px-36 mb-10 ">
      <div
        className="container mt-5 rounded-2xl p-10 flex flex-col gap-5"
        style={{ background: 'rgba(33, 120, 115, 0.20)' }}
      >
        <p className="text-[#252C2B] text-3xl font-semibold">
          Trending event hashtags in your area
        </p>
        <p className="text-[#252C2B]">
          Search among the trending event tags and become a part of what’s
          eventing in your area.
        </p>

        <div className="grid grid-cols-4 items-center gap-3">
          {trends.map((trends) => (
            <div className="flex items-center">
              <div className="bg-[#217873] text-[#252C2B] text-2xl px-2 py-3">
                #
              </div>
              <div className="flex flex-col bg-white px-3 py-1">
                <p className="text-lg font-medium text-black">{trends.event}</p>
                <p className="text-[#217873]">
                  {trends.rate}%{' '}
                  <span className="text-[#252C2B]">used in your area</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Trend
