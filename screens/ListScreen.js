import React from " react"



const students = [ 
    { name: "gabriel", surname "rocha",  age:"17"},
    { name: "Kaylen", surname "tyler ",  age:"15"},
    { name: "tllie", surname "MccLure",  age:"17"},
    { name: "Journey", surname "Blaackburn",  age:"16"},
];

const listScreen = () => {
    return (
        <view>
            <text> List of students </text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ (student) => student.name}
            data={students}
            renderItem={({ item }) => {
                return(
                    <text>
                        {item.name} - {item.surname} - {item.age }
                    </text>
                );
            }}
        />    

        </view>
    );
};

conts style = StyleSheet.create({});

export default listScreen;
