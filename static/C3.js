var chart = c3.generate({
    data: {
        x: 'CE Rank',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['CE Rank', '2017-01-01', '2018-01-01', '2019-01-01', '2020-01-01'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Fremont', 1, 1, 1, 5],
            ['San Jose', 15, 27, 44, 64],
            ['Irvine', 6, 11, 5, 13],
            ['San Francisco', 101, 126, 125, 158],
            ['Sioux Falls', 3, 20, 95, 21]
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});