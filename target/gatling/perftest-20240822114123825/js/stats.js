var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "156",
        "ok": "156",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "545",
        "ok": "545",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1354",
        "ok": "1354",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "601",
        "ok": "601",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "percentiles1": {
        "total": "577",
        "ok": "577",
        "ko": "-"
    },
    "percentiles2": {
        "total": "599",
        "ok": "599",
        "ko": "-"
    },
    "percentiles3": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1129",
        "ok": "1129",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 153,
    "percentage": 98
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.943",
        "ok": "2.943",
        "ko": "-"
    }
},
contents: {
"req_get--api-tags-5e3fe": {
        type: "REQUEST",
        name: "GET /api/tags",
path: "GET /api/tags",
pathFormatted: "req_get--api-tags-5e3fe",
stats: {
    "name": "GET /api/tags",
    "numberOfRequests": {
        "total": "156",
        "ok": "156",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "545",
        "ok": "545",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1354",
        "ok": "1354",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "601",
        "ok": "601",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "percentiles1": {
        "total": "577",
        "ok": "577",
        "ko": "-"
    },
    "percentiles2": {
        "total": "599",
        "ok": "599",
        "ko": "-"
    },
    "percentiles3": {
        "total": "705",
        "ok": "705",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1129",
        "ok": "1129",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 153,
    "percentage": 98
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.943",
        "ok": "2.943",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
