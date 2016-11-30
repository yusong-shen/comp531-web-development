import { expect } from 'chai'
import rootReducer, {} from './reducers'
import articlesReducer from './articlesReducer'


const initState = {
    error: {},
    form: {},
    profile: {
        avatar: '',
        username: '',
        email: '',
        zipcode: '',
        headline: '',
    },
    navigate: {
        nextPage: 'LandingPage'
    },
    articles: {
        keyword: '',
        articles:[]
    },
    followings: {
        followings: []
    },
    auth: {
        authenticated: false
    }
}

describe('Validate reducer', () => {

    it('should initialize state', () => {
        expect(rootReducer({}, {})).to.eql(initState)
    })

    it('should state success (for displaying success message to user)', () => {
        // TODO
    })

    it('should state error (for displaying error message to user)', () => {
        // TODO
    })

    const before = initState.articles
    const testArticles = {
        "articles": [
            {
                "_id": 4767123,
                "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.\r",
                "date": "2015-07-05T09:26:39.741Z",
                "img": null,
                "comments": [],
                "author": "ral8"
            },
            {
                "_id": 2863772,
                "text": "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.\r",
                "date": "2015-06-01T19:22:37.347Z",
                "img": null,
                "comments": [],
                "author": "jmg3"
            }
        ]
    }
    it('should set the articles', () => {
        const state = articlesReducer(before, {
            type: 'updateArticles',
            articles: testArticles.articles
        })
        expect(state).to.eql({
            ...before,
            articles: testArticles.articles
        })
    })

    it('should set the search keyword', () => {
        const state = articlesReducer(before, {
            type: 'setKeyword',
            keyword: 'whatever'
        })
        expect(state.keyword).to.eql('whatever')
    })


})