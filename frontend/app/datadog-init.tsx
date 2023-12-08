   // Necessary if using App Router to ensure this file runs on the client
   "use client";
    
    import { datadogRum } from "@datadog/browser-rum";
    
    datadogRum.init({
      applicationId: "9db08afe-b6a0-40c8-89c9-5d24da62bacd",
      clientToken: "pub5838b694c086da3eb13a8de9f5242fda",
      site: "datadoghq.com",
      service: "observability-crud",
      env: "dev",
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "mask-user-input",
      // Specify URLs to propagate trace headers for connection between RUM and backend trace
      allowedTracingUrls: [
        { match: "https://example.com/api/", propagatorTypes: ["tracecontext"] },
      ],
    });
    
    export default function DatadogInit() {
      return null;
    }
   
