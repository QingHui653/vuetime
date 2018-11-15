const tabs = {
  state: {
    tabs:[],
  },
  mutations: {
    addTabNav(state, tab) {
      //重置所有为未选定,在push
      //判断是否已经添加
      var isExit =false;
      state.tabs.forEach(function (value,index,array) {
        if(value.url===tab.url){
          isExit=true
          value.current=true;
        }else {
          value.current=false;
        }
      });

      if(!isExit)
        state.tabs.push(tab);
    },
    delTabNav(state, url){
      var delIndex = 0;
      state.tabs.forEach(function (value,index,array) {
        if(value.url===url) delIndex=index;
      });
      state.tabs.splice(delIndex,1);
    }
  },
  actions: {

  }
}

export default tabs
