#include <iostream>
#include <vector>
#include <unordered_set>
#include <cmath>
#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        vector<int> answer;

        int freq1[1005]={0},freq2[1005]={0};
        for(int i =0;i<nums1.size();i++) {
            freq1[nums1[i]]++;
        }
        for(int i =0;i<nums2.size();i++) {
            freq2[nums2[i]]++;
        }
        for (int i = 0; i < 1005; ++i) {
            if (freq1[i]>0 && freq2[i]>0) {
                int max = min(freq1[i],freq2[i]);
                while (max--) {
                    answer.push_back(i);

                }
            }
        }
        return answer;

    }
};