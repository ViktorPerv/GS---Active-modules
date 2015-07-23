<?php
?>
<div ng-controller="MyCtrl">
    <ul>
        <li ng-repeat="item in items" ng-click="showChilds($index)">
            <span>{{item.name}}</span>
            <ul>
                <li ng-repeat="subItem in item.subItems" ng-show="item.active">
                    <span>---{{subItem.name}}</span>
                </li>
            </ul>
        </li>
    </ul>
</div>
