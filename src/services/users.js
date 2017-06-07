/**
 * Created by liuwenwen on 2017/6/7.
 */
import request from '../utils/request';
import { PAGE_SIZE } from '../constants';


//查询
  export function fetch({ page }) {
     return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
  }

//删除
export function remove(id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE',
  });
}

//根据ID 查询
export function patch(id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
