#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int,int>m;
        for (auto it:nums) {
            m[it]++;
        }
        priority_queue<pair<int,int>> pq;
        for (auto it:m) {
            pq.push({it.second,it.first});
        }
        vector<int>res;
        while (k--) {
            res.push_back(pq.top().second);
            pq.pop();
        }
        return res;
    }
};