import moment from 'moment'

import 'moment/locale/pl'

const Header = () => {
    const date: string = moment().format('dddd, D MMMM')
    const formatedDate = date.charAt(0).toUpperCase() + date.slice(1)

    return <div className='app-header p-5 text-center text-md-start'>
        <h1 className='py-4'>{formatedDate}</h1>
    </div>
}

export default Header