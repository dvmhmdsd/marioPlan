const initState = {
    projects: [
        {id: '1', title: 'first project', author: 'Mohamed Saad'},
        {id: '2', title: 'second project', author: 'Mohamed Saad'},
        {id: '3', title: 'third project', author: 'Mohamed Saad'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PROJECT':
            console.log("create ", action.project);
    }
    return state;
}

export default projectReducer;