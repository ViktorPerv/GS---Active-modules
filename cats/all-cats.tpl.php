<div ng-controller="catscontroller">
  <div class="cat" ng-repeat="cat in cats">
    <h2>{{cat.node.title}}</h2>
    <div class="body">
      {{cat.node.Body}}
    </div>
    <image src="{{cat.node.Image.src}}" />
  </div>
</div>

<!--
<div ng-controller="MyCtrl">
    <ul>
        <li ng-repeat="item in items" ng-click="showChilds($index)">
            <span>{{item.name}}</span>
            <ul>
                <li ng-repeat="subItem in item.subItems" ng-show="item.active">
                    <span>-- {{subItem.name}}</span>
                </li>
            </ul>
        </li>
    </ul>
</div>
-->
