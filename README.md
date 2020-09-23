# Azure Devops statistics to New Relic

## Set-up

1) Deploy function with App Settings `NEWRELIC_ACCOUNT_ID` and `NEWRELIC_INSERT_KEY` set for the New Relic account where you want to push the data.
2) Create Service Bus Queue and configure the function to trigger on items in queue: https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-quickstart-portal
3) Set-up Azure DevOps Service Hook to `Azure Service Queue`: https://docs.microsoft.com/en-us/azure/devops/service-hooks/consumers?view=azure-devops#azureservicebus

You can set-up as many as you like, currently `Build completed`, `Release created` and `Release deployment completed` were implemented. Please create and issue if you'd like to see another event type implemented.


## Example data

```
{
    "buildId": 19,
    "definition": "zicht - CI",
    "definitionUrl": "https://samuelv.visualstudio.com/49881088-26d3-46cb-abcc-e1268e3ad6e8/_apis/build/Definitions/1",
    "detailedMessage": "Build 20200810.7 failed\r\n\r\n- Bash exited with code '1'.\r\n",
    "duration": 37206,
    "finishTime": 1597051458614,
    "message": "Build 20200810.7 failed",
    "nr.customEventSource": "customEventInserter",
    "reason": "manual",
    "startTime": 1597051421408,
    "status": "failed",
    "timestamp": 1597051472807,
    "type": "build.complete",
    "uri": "vstfs:///Build/Build/19",
    "url": "https://samuelv.visualstudio.com/49881088-26d3-46cb-abcc-e1268e3ad6e8/_apis/build/Builds/19"
},
{
    "detailedMessage": "Deployment of release Release-5 on stage dev rejected. Time to deploy: 00:00:30.",
    "environmentId": 5,
    "environmentName": "dev",
    "environmentOwner": "Samuel Vandamme",
    "environmentReleaseId": 5,
    "environmentStatus": "rejected",
    "message": "Deployment of release Release-5 on stage dev rejected.",
    "nr.customEventSource": "customEventInserter",
    "project": "zicht",
    "projectId": "49881088-26d3-46cb-abcc-e1268e3ad6e8",
    "releaseDefinitionId": 1,
    "releaseDefinitionName": "zicht - CD",
    "releaseDefinitionUrl": "https://samuelv.vsrm.visualstudio.com/49881088-26d3-46cb-abcc-e1268e3ad6e8/_apis/Release/definitions/1",
    "releaseId": 5,
    "releaseName": "Release-5",
    "timeToDeploy": 0.5165666666666667,
    "timestamp": 1597051130868,
    "triggerReason": "ReleaseStarted",
    "type": "ms.vss-release.deployment-completed-event"
},
{
    "buildId": 18,
    "definition": "zicht - CI",
    "definitionUrl": "https://samuelv.visualstudio.com/49881088-26d3-46cb-abcc-e1268e3ad6e8/_apis/build/Definitions/1",
    "detailedMessage": "Build 20200810.6 succeeded",
    "duration": 35819,
    "finishTime": 1597051085641,
    "message": "Build 20200810.6 succeeded",
    "nr.customEventSource": "customEventInserter",
    "reason": "manual",
    "startTime": 1597051049822,
    "status": "succeeded",
    "timestamp": 1597051099203,
    "type": "build.complete",
    "uri": "vstfs:///Build/Build/18",
    "url": "https://samuelv.visualstudio.com/49881088-26d3-46cb-abcc-e1268e3ad6e8/_apis/build/Builds/18"
}
```
