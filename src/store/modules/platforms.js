const state = {
    platforms: [
        {
          name: '新PT老虎机',
          customClass: 'PT1',
          imagePath: 'new-ico.png',
          link: '/New_PT_List',
          balance: 0,
          forBalancePlatform: false
        },
        {
          name: 'PT老虎机',
          customClass: 'PT',
          imagePath: 'new-ico.png',
          link: '/PT',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'MG老虎机',
          customClass: 'MG',
          imagePath: '',
          link: '/MG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'SG老虎机',
          customClass: 'SG',
          imagePath: '',
          link: '/SG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'HABA老虎机',
          customClass: 'HABA',
          imagePath: '',
          link: '/HABA',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'PNG老虎机',
          customClass: 'PNG',
          imagePath: '',
          link: '/PNG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'TTG老虎机',
          customClass: 'TTG',
          imagePath: '',
          link: '/TTG',
          balance: 0,
          forBalancePlatform: true
        },
        {
          name: 'BS老虎机',
          customClass: 'BS',
          imagePath: '',
          link: '/BS',
          balance: 0,
          forBalancePlatform: true
        }
      ]
}



const getters = {
    getBalancePlatforms: function(state ){
        return state.platforms.filter( state => state.forBalancePlatform );
    }
}

export default {
    state,
    getters
}