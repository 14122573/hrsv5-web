import request from '@/utils/request'

//查询任务信息
export function searchEtlSubSys(data) {
    return request({
        url: '/C/jobschedule/searchEtlSubSys',
        method: 'post',
        params: data
    })
}

//保存作业模板信息
export function saveEtlJobTemp(data) {
    return request({
        url: '/C/jobschedule/saveEtlJobTemp',
        method: 'post',
        params: data
    })
}

//获取该工程下所有作业模板信息
export function searchEtlJobTemplate(data) {
    return request({
        url: '/C/jobschedule/searchEtlJobTemplate',
        method: 'post',
        params: data
    })
}

//关联查询作业模板表和作业模板参数
export function searchEtlJobTempAndParam(data) {
    return request({
        url: '/C/jobschedule/searchEtlJobTempAndParam',
        method: 'post',
        params: data
    })
}