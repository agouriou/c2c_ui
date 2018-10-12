
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'

import {
    faAngleDown,
    faArrowsAltV,
    faAt,
    faAtlas,
    faBold,
    faBomb,
    faBullseye,
    faCamera,
    faCheckCircle,
//    faCheckSquare,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faCode,
    faCogs,
    faColumns,
    faComment,
    faComments,
    faCompass,
    faEdit,
    faFlag,
    faFlagCheckered,
    faGlobeAmericas,
    faHeading,
    faHeart,
    faHistory,
    faHome,
    faImage,
    faInfo,
    faItalic,
    faKey,
    faLayerGroup,
    faLink,
    faList,
    faListOl,
    faListUl,
    faLock,
    faMap,
    faMapMarkedAlt,
    faMapPin,
    faNewspaper,
    faObjectGroup,
    faPen,
    faPlus,
    faPlusCircle,
    faQuestionCircle,
    faRoute,
    faSearch,
    faSignOutAlt,
    faSortAmountUp,
    faStar,
//    faSquare,
    faTachometerAlt,
    faThLarge,
    faThList,
    faTrash,
    // faTrashAlt,
    faUnlock,
    faUser,
    faUserCheck,
    faUserLock,
    faUsers,
    faWrench,
} from '@fortawesome/free-solid-svg-icons'

import {
    faCircle as faCircleRegular,
    faSun as faSunRegular,
    faTrashAlt as faTrashAltRegular,
} from '@fortawesome/free-regular-svg-icons'


import {
    faCreativeCommons,
    faFacebook,
    faGoogle,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'




// registered globally

export default {

    install(Vue){

        library.add(
            //solid icons
            faAngleDown,
            faArrowsAltV,
            faAt,
            faAtlas,
            faBold,
            faBomb,
            faBullseye,
            faCamera,
            faCheckCircle,
        //    faCheckSquare,
            faChevronLeft,
            faChevronRight,
            faCircle,
            faCode,
            faCogs,
            faColumns,
            faComment,
            faComments,
            faCompass,
            faEdit,
            faFlag,
            faFlagCheckered,
            faGlobeAmericas,
            faHeading,
            faHeart,
            faHistory,
            faHome,
            faImage,
            faInfo,
            faItalic,
            faKey,
            faLayerGroup,
            faLink,
            faList,
            faListOl,
            faListUl,
            faLock,
            faMap,
            faMapMarkedAlt,
            faMapPin,
            faNewspaper,
            faObjectGroup,
            faPen,
            faPlus,
            faPlusCircle,
            faQuestionCircle,
            faRoute,
            faSearch,
            faSignOutAlt,
            faSortAmountUp,
            faStar,
        //    faSquare,
            faTachometerAlt,
            faThLarge,
            faThList,
            faTrash,
            // faTrashAlt,
            faUnlock,
            faUser,
            faUserCheck,
            faUserLock,
            faUsers,
            faWrench,

            //regular icons
            faCircleRegular,
            faSunRegular,
            faTrashAltRegular,

            //brands icons
            faCreativeCommons,
            faFacebook,
            faGoogle,
            faTwitter,
        )

        Vue.component('fa-icon', FontAwesomeIcon)
        Vue.component('fa-layers', FontAwesomeLayers)
    }
}
