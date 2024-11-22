import { LuHeartHandshake, LuUserCircle2 } from "react-icons/lu";
import { GoOrganization, GoCommentDiscussion, GoGear } from "react-icons/go";

export const HeroItems = {
    title: 'Empower Change with Every Act of Kindness',
    content: [`Discover meaningful volunteer opportunities or find`,` dedicated volunteers to support your cause. Join our`,`community today and make a lasting impact!`].join('\n')
}

export const nav_links = [
    {
        route: '#!',
        name: 'Volunteer',
        icon: <LuHeartHandshake size={20}/>
    },
    {
        route: '#!',
        name: 'Organisation',
        icon: <GoOrganization size={20}/>
    },
    {
        route: '#!',
        name: 'Commmunity',
        icon: <GoCommentDiscussion size={20}/>
    }
]

export const account = [
    {
        route: '#!',
        name: 'Your data',
        icon: <LuUserCircle2 size={20}/>
    },
    {
        route: '#!',
        name: 'Settings',
        icon: <GoGear size={20}/>
    }
]