import { Code, Help, Architecture } from './icons';

export const ServiceData = [
  {
    locationId: 'development',
    title: 'Development',
    image: Code,
    link: '/services#development',
    description:
      'Looking to optimize your Microsoft 365 environment? We specialize in crafting custom solutions that improve productivity and enhance user experience. Our expertise includes building robust SharePoint Framework components, intuitive Canvas and Model-Driven Power Apps, and seamless Power Automate integrations. Let us help you streamline your processes, manage data effectively, and empower your organization to thrive.',
    children: [
      {
        title: 'SPFx Development',
        description:
          'Leverage the power of the SharePoint Framework (SPFx) with our expert development services. We build robust, modern web parts and extensions that seamlessly integrate with your Microsoft 365 environment. Our team utilizes the latest SPFx techniques and best practices to create custom solutions that enhance user experience, improve workflows, and extend the functionality of your SharePoint site, ensuring you get the most out of your investment.'
      },
      {
        title: 'Canvas Apps',
        description:
          'Unleash the potential of your data with custom-built Canvas Apps. We design and develop pixel-perfect applications that cater to your specific business needs, offering a flexible and intuitive interface for users across devices. From simple data entry forms to complex process management tools, our Canvas Apps empower your teams to work more efficiently and effectively, transforming everyday tasks into streamlined digital experiences.'
      },
      {
        title: 'Model-Driven Apps',
        description:
          'Streamline your business processes and data management with robust Model-Driven Apps. We leverage the power of the Dataverse to create standardized and efficient applications that ensure data consistency and facilitate collaboration. Our Model-Driven Apps are ideal for complex workflows and data-intensive scenarios, providing a structured and organized approach to managing information, and empowering your organization with consistent and reliable data.'
      },
      {
        title: 'Power Automate Integrations',
        description:
          'Supercharge your workflows and eliminate manual tasks with seamless Power Automate integrations. We connect your Power Apps and your SharePoint Sites with other Microsoft 365 tools and external services, automating repetitive processes and improving efficiency. From sending notifications to generating reports, our Power Automate integrations unlock the full potential of your digital ecosystem and empower you to focus on strategic initiatives.'
      }
    ]
  },
  {
    title: 'Architecture',
    locationId: 'architecture',
    image: Architecture,
    link: '/services/#architecture',
    description:
      'Enhance your digital capabilities and streamline your operations with our specialized Microsoft 365 services. We provide tailored solutions that empower your organization to harness the power of data, enhance communication, and foster collaboration. From building robust data foundations to creating engaging digital workplaces, we work with you to implement solutions that drive efficiency, productivity, and growth.',
    children: [
      {
        title: 'Dataverse Solutions',
        description:
          'Build a solid foundation for your digital transformation with our Dataverse solutions. We design and implement robust, scalable data models tailored to your unique business requirements. Our expertise in Dataverse ensures your applications have a strong, secure, and compliant data backend, allowing you to create future-proof solutions that can grow and evolve alongside your organization, maximizing the value of your data assets.'
      },
      {
        title: 'Microsoft Forms',
        description:
          'Unlock the power of data collection and analysis with our Microsoft Forms expertise. We design and implement forms that capture the information you need, from surveys and feedback forms to registration pages and quiz solutions. Our approach ensures that your forms are user-friendly, mobile-responsive, and securely integrated with other Microsoft 365 applications, allowing you to make data-driven decisions for your organization.'
      },
      {
        title: 'Intranets',
        description:
          'Build a vibrant and engaging digital workplace with a custom-designed SharePoint intranet. We craft intranets that serve as a central hub for communication, collaboration, and access to vital company resources. Our approach focuses on intuitive navigation, personalized content, and seamless integration with other Microsoft 365 tools, ensuring your intranet becomes a valuable tool for every employee.'
      },
      {
        title: 'Content Management',
        description:
          'Take control of your website and intranet content with our comprehensive SharePoint content management solutions. We build intuitive platforms that empower your team to create, manage, and publish content effectively. Our solutions prioritize usability, accessibility, and searchability, making it easy for users to find the information they need when they need it, ultimately leading to better communication and a more engaged audience.'
      }
    ]
  },
  {
    locationId: 'helpdesk',
    title: '365 Support | Helpdesk',
    image: Help,
    link: '/services/#helpdesk',
    description:
      'Ensure the smooth operation of your Microsoft 365 environment with our dedicated support and helpdesk services. We provide timely, expert assistance to your users, resolving issues quickly and efficiently. From everyday questions to complex technical challenges, our team is here to keep your organization productive and your 365 experience seamless. We cover everything from user guidance to complex configuration.',
    children: [
      {
        title: 'User Support',
        description:
          'Empower your users to get the most out of Microsoft 365 with our comprehensive user support services. Our helpdesk is available to answer questions, provide guidance, and troubleshoot issues that may arise. We are dedicated to providing prompt and friendly assistance, ensuring your team can confidently navigate the Microsoft 365 platform and utilize its full potential. We help your team leverage all the tools available, enhancing their daily workflow.'
      },
      {
        title: 'Issue Resolution',
        description:
          'Minimize disruptions and maintain productivity with our expert Microsoft 365 issue resolution services. Our team is skilled at diagnosing and resolving a wide range of issues, from technical glitches to application errors. We employ a proactive approach to troubleshooting, working to identify and fix problems quickly and efficiently, minimizing downtime and ensuring your team can stay focused on their work.'
      },
      {
        title: 'Configuration & Setup',
        description:
          'Tailor your Microsoft 365 environment to meet your specific needs with our expert configuration services. We help you optimize settings, customize applications, and establish workflows that align with your business requirements. From initial setup to ongoing adjustments, our team ensures your 365 environment is configured for maximum efficiency, security, and user satisfaction, ensuring your setup is optimized for your workflows.'
      },
      {
        title: 'Training',
        description:
          "Empower your team with the skills they need to thrive in the modern workplace. I offer tailored training on Microsoft 365 and SharePoint, helping your organization maximize productivity, collaboration, and efficiency. From basic navigation to advanced features, I'll guide your users to success."
      }
    ]
  }
];
